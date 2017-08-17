const parseString = require('xml2js').parseString;

var xml = '<SearchResults:searchresults xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SearchResults="http://www.zillow.com/static/xsd/SearchResults.xsd" xsi:schemaLocation="http://www.zillow.com/static/xsd/SearchResults.xsd http://www.zillowstatic.com/vstatic/41c25c3/static/xsd/SearchResults.xsd"><request><address>9416 Mayflower Ct</address><citystatezip>Laurel, MD</citystatezip></request><message><text>Request successfully processed</text><code>0</code></message><response><results><result><zpid>37054605</zpid><links><homedetails>http://www.zillow.com/homedetails/9416-Mayflower-Ct-Laurel-MD-20723/37054605_zpid/</homedetails><graphsanddata>http://www.zillow.com/homedetails/9416-Mayflower-Ct-Laurel-MD-20723/37054605_zpid/#charts-and-data</graphsanddata><mapthishome>http://www.zillow.com/homes/37054605_zpid/</mapthishome><comparables>http://www.zillow.com/homes/comps/37054605_zpid/</comparables></links><address><street>9416 Mayflower Ct</street><zipcode>20723</zipcode><city>Laurel</city><state>MD</state><latitude>39.1117</latitude><longitude>-76.854679</longitude></address><zestimate><amount currency="USD">281115</amount><last-updated>08/16/2017</last-updated><oneWeekChange deprecated="true"/><valueChange duration="30" currency="USD">1641</valueChange><valuationRange><low currency="USD">264248</low><high currency="USD">295171</high></valuationRange><percentile>0</percentile></zestimate><localRealEstate><region name="Laurel" id="35593" type="city"><zindexValue>301,100</zindexValue><links><overview>http://www.zillow.com/local-info/MD-Laurel/r_35593/</overview><forSaleByOwner>http://www.zillow.com/laurel-md/fsbo/</forSaleByOwner><forSale>http://www.zillow.com/laurel-md/</forSale></links></region></localRealEstate></result></results></response></SearchResults:searchresults>';
parseString(xml, function (err, result) {
    console.dir(JSON.stringify(result));
});
