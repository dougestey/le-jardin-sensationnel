module.exports = {

  read(req, res) {
    let value = Sensors.IRAlpha.read();

    if (value)
      return res.status(200)
    else
      return res.status(400).json({ message: `Didn't receive anything from the sensor in time. `});
  }

};