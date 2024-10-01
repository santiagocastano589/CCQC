<?php
header('Content-Type: application/json');

// Conexión a la base de datos
$server = "172.30.0.2";
$username = "ccq";
$password = "ccq";
$database = "HOSVITAL";

try {
    $conn = new PDO("sqlsrv:server=$server;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "SELECT 
                                Pabellon, Cama, Ingreso, Tip_Doc, Documento,Folio, Paciente, Fec_Ingreso, Origen_Atencion, Tipo_Concepto, Cups, Nombre_Procedimiento, Cantidad, 
                                 Fch_Orden,    Observaciones
        FROM         (SELECT DISTINCT tf.TFcCodPab AS Pabellon_num,
                                                                (SELECT   MPNomP
                                                                   FROM         dbo.MAEPAB AS m
                                                                   WHERE     (b1.MPCodP = MPCodP)) AS Pabellon, b1.MPNumC AS Cama, b1.MPCtvIn AS Ingreso, b1.MPUDoc AS Tip_Doc,H51.HISCSEC as Folio, LTRIM(RTRIM(b1.MPUced)) AS Documento, 
                                                            LTRIM(RTRIM(cp.MPNOMC)) AS Paciente, CONVERT(varchar(10), ig.IngFecAdm, 103) AS Fec_Ingreso, 
                                                            (CASE WHEN ltrim(rtrim(H1.HISCLPR)) = '2' THEN 'HOSPITALIZACION' WHEN ltrim(rtrim(HISCLPR)) = '3' THEN 'URGENCIAS' WHEN ltrim(rtrim(HISCLPR)) 
                                                            = '1' THEN 'CX.AMBULATORIA' END) AS Origen_Atencion,
                                                                (SELECT   LTRIM(RTRIM(tp.TiPrDes)) AS Expr1
                                                                   FROM         dbo.TIPPROC AS tp INNER JOIN
                                                                                            dbo.MAEPRO AS MPR ON MPR.TpPrCd = tp.TiPrCod
                                                                   WHERE     (ma.PRCODI = MPR.PRCODI)) AS Tipo_Concepto, ltrim(rtrim(h51.HCPrcCod)) AS Cups, LTRIM(RTRIM(ma.PrNomb)) AS Nombre_Procedimiento, H5.HisCPCan AS Cantidad, 
                                                            h51.HCFcHrOrd AS Fch_Orden, 
                                                            LTRIM(RTRIM(H5.HisCpObs)) AS Observaciones
                                   FROM         dbo.MAEPAB1 AS b1 LEFT OUTER JOIN
                                                            dbo.HCCOM51 AS h51 WITH (nolock) ON b1.MPUDoc = h51.HISTipDoc AND b1.MPUced = h51.HISCKEY AND b1.MPCtvIn = h51.HCtvIn51 LEFT OUTER JOIN
                                                            dbo.HCCOM5 AS H5 WITH (nolock) ON H5.HISCKEY = h51.HISCKEY AND H5.HISTipDoc = h51.HISTipDoc AND H5.HCPrcCod = h51.HCPrcCod AND 
                                                            H5.HISCSEC = h51.HISCSEC INNER JOIN
                                                            dbo.HCCOM1 AS H1 WITH (nolock) ON h51.HISCKEY = H1.HISCKEY AND h51.HISTipDoc = H1.HISTipDoc AND h51.HISCSEC = H1.HISCSEC AND 
                                                            h51.HCtvIn51 = H1.HCtvIn1 LEFT OUTER JOIN
                                                            dbo.MAEPRO AS ma WITH (nolock) ON h51.HCPrcCod = ma.PRCODI LEFT OUTER JOIN
                                                            dbo.CAPBAS AS cp WITH (nolock) ON b1.MPUced = cp.MPCedu AND b1.MPUDoc = cp.MPTDoc LEFT OUTER JOIN
                                                            dbo.INGRESOS AS ig WITH (nolock) ON b1.MPUced = ig.MPCedu AND b1.MPUDoc = ig.MPTDoc AND b1.MPCtvIn = ig.IngCsc LEFT OUTER JOIN
                                                            dbo.MAEMED1 AS M1 WITH (nolock) ON H1.HISCMMED = M1.MMCODM LEFT OUTER JOIN
                                                            dbo.MAEESP AS m WITH (nolock) ON H1.HCEsp = m.MECodE LEFT OUTER JOIN
                                                            dbo.MAEEMP WITH (nolock) ON ig.IngNit = dbo.MAEEMP.MENNIT LEFT OUTER JOIN
                                                            dbo.EMPRESS AS e WITH (nolock) ON dbo.MAEEMP.MEcntr = e.MEcntr LEFT OUTER JOIN
                                                            dbo.TMPFAC AS tf WITH (nolock) ON b1.MPUced = tf.TFCedu AND b1.MPUDoc = tf.TFTDoc AND b1.MPCtvIn = tf.TmCtvIng
                                   WHERE     (b1.MPActCam = 'N') AND (b1.MPDisp = '1') AND (b1.MPCodP NOT IN ('14', '15', '16', '17', '18')) AND (h51.HCPrFhCaD = '1753-01-01 00:00:00.000') AND (h51.HCPrcEst IN ('O', 'E', 'A', 
                                                            'I')) and TpPrCd in ('2','1') and H51.HCPrcEst='O' and H51.HCOrdAmb = 'N' 
                                  
                                  
                                  
                      union all
                      
                  SELECT DISTINCT tf.TFcCodPab AS Pabellon_num,
                                                               'URGENCIAS' as Pabellon, '0' AS Cama, ig.IngCsc AS Ingreso, ig.MPTDoc AS Tip_Doc,H51.HISCSEC as Folio, LTRIM(RTRIM(ig.MPCedu)) AS Documento, 
                                                            LTRIM(RTRIM(cp.MPNOMC)) AS Paciente, CONVERT(varchar(10), ig.IngFecAdm, 103) AS Fec_Ingreso, 
                                                            (CASE WHEN ltrim(rtrim(H1.HISCLPR)) = '2' THEN 'HOSPITALIZACION' WHEN ltrim(rtrim(HISCLPR)) = '3' THEN 'URGENCIAS' WHEN ltrim(rtrim(HISCLPR)) 
                                                            = '1' THEN 'CX.AMBULATORIA' END) AS Origen_Atencion,
                                                                (SELECT   LTRIM(RTRIM(tp.TiPrDes)) AS Expr1
                                                                   FROM         dbo.TIPPROC AS tp INNER JOIN
                                                                                            dbo.MAEPRO AS MPR ON MPR.TpPrCd = tp.TiPrCod
                                                                   WHERE     (ma.PRCODI = MPR.PRCODI)) AS Tipo_Concepto, h51.HCPrcCod AS Cups, LTRIM(RTRIM(ma.PrNomb)) AS Nombre_Procedimiento, H5.HisCPCan AS Cantidad, 
                                                            h51.HCFcHrOrd AS Fch_Orden, 
                                                            LTRIM(RTRIM(H5.HisCpObs)) AS Observaciones
                                   FROM         
                                                            dbo.HCCOM51 AS h51 LEFT OUTER JOIN
                                                            dbo.HCCOM5 AS H5 WITH (nolock) ON H5.HISCKEY = h51.HISCKEY AND H5.HISTipDoc = h51.HISTipDoc AND H5.HCPrcCod = h51.HCPrcCod AND 
                                                            H5.HISCSEC = h51.HISCSEC INNER JOIN
                                                            dbo.HCCOM1 AS H1 WITH (nolock) ON h51.HISCKEY = H1.HISCKEY AND h51.HISTipDoc = H1.HISTipDoc AND h51.HISCSEC = H1.HISCSEC AND 
                                                            h51.HCtvIn51 = H1.HCtvIn1 LEFT OUTER JOIN
                                                            dbo.MAEPRO AS ma WITH (nolock) ON h51.HCPrcCod = ma.PRCODI LEFT OUTER JOIN
                                                            dbo.CAPBAS AS cp WITH (nolock) ON h51.HISCKEY= cp.MPCedu AND h51.HISTipDoc = cp.MPTDoc LEFT OUTER JOIN
                                                            dbo.INGRESOS AS ig WITH (nolock) ON h51.HISCKEY = ig.MPCedu AND h51.HISTipDoc = ig.MPTDoc AND  H51.HCtvIn51 = ig.IngCsc LEFT OUTER JOIN
                                                            dbo.MAEMED1 AS M1 WITH (nolock) ON H1.HISCMMED = M1.MMCODM LEFT OUTER JOIN
                                                            dbo.MAEESP AS m WITH (nolock) ON H1.HCEsp = m.MECodE LEFT OUTER JOIN
                                                            dbo.MAEEMP WITH (nolock) ON ig.IngNit = dbo.MAEEMP.MENNIT LEFT OUTER JOIN
                                                            dbo.EMPRESS AS e WITH (nolock) ON dbo.MAEEMP.MEcntr = e.MEcntr LEFT OUTER JOIN
                                                            dbo.TMPFAC AS tf WITH (nolock) ON ig.MPCedu  = tf.TFCedu AND ig.MPTDoc = tf.TFTDoc AND ig.IngCsc = tf.TmCtvIng
                                   WHERE     ( tf.TFcCodPab  IN ('2','21','22','23','24','25') and IngInSlC = 'N') AND (h51.HCPrFhCaD = '1753-01-01 00:00:00.000') AND (h51.HCPrcEst IN ('O', 'E', 'A',  'I')) and TpPrCd in ('2','1') and H51.HCPrcEst='O' and H51.HCOrdAmb = 'N' AND ig.MPCedu not in ('123123')
                                  
                                  
                                  
                                  
                                  
                                  ) AS table1";
    
    $stmt = $conn->prepare($query);
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($results);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
