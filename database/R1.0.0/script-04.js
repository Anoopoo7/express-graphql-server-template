const { isDelta, deltaSuccess } = require("../delta");

const scriptId = "R1.0.0/script-04";

const script_04 = async (mongoose, env = "local") => {
  const isRunable = await isDelta(mongoose, scriptId);

  if (!isRunable) {
    console.log(`skipping script: ${scriptId}`);
    return;
  }

  const collection = mongoose.connection.collection("systems");

  if (env) {
    await collection.insertMany([
      {
        code: "EMAIL_CONFIGURATIONS",
        defaultConfigurations: {
          dashboard_user_invite: {
            from: "official.alwibster@gmail.com",
            templateId: "d-3d6d044bfbd8422481bb1bd0ee0736fa",
          },
        },
        channelConfigurations: null,
        createdAt: "2024-01-10T10:00:00.000Z",
        updatedAt: "2024-05-20T10:00:00.000Z",
        isActive: true,
        createdBy: "script@R1.0.0-04",
        updatedBy: "script@R1.0.0-04",
      },
    ]);
    console.log("Data inserted successfully.");
  }
  if (env === "local") {
  }
  if (env === "uat") {
  }
  if (env === "prod") {
  }

  await deltaSuccess(mongoose, scriptId);
};

module.exports = script_04;