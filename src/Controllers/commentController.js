exports.create = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Create Comment  api",
  });
};

exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Read Comment  api",
  });
};

exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Delete Comment  api",
  });
};
exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello! This is my Update Comment  api",
  });
};
