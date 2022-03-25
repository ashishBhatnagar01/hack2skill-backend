const Teams = require("../models/Teams");

const Users = require("../models/Users");

module.exports.getData = async (req, res) => {
  // console.log(req.query)
  // var pageSize = Number(10)
  // var pageNumber = Number(req.query.pageNumber)
  const data = await Users.aggregate([
    {
      $lookup: {
        from: "teams",
        localField: "email",
        foreignField: "email",
        as: "teamData",
      },
    },
    {
      $unwind: "$teamData",
    },
    {
      $project: {
        full_name: 1,
        email: 1,
        number: 1,
        city: 1,
        url: 1,
        "teamData.team_name": 1,
        _id: 0,
      },
    },
    // {
    //   $skip: pageSize * pageNumber
    // },
    // {
    //     $limit:pageSize
    // }
  ]);
  console.log(data.length);
  
  return res.json({
    message: data,
  });
};
