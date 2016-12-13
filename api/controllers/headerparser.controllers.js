module.exports.getHeaderParser = function(req, res) {

  var clientIp = req.ip; //connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  var clientLang = req.headers["accept-language"];
  var clientOS = req.headers["user-agent"];

  var responseJSON = {
    "IP Address": clientIp,
    "Language": clientLang,
    "OS": clientOS
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(responseJSON, null, 3));

  console.log(req.headers);


};