const prisma = require("../DB/db.config");

exports.getTestData = async (req, res) => {
  try {
    const result = await prisma.test.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
