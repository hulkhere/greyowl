import prisma from "../../utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ status: 405, message: "Method Not Allowed" });

  const { email, firstName, lastName, phoneNumber, message } = req.body;
  if (!email || !firstName || !lastName || !phoneNumber || !message)
    return res
      .status(400)
      .json({ status: 400, message: "All fields are required" });

  const isUserWhilelisted = await prisma.waitlist.findUnique({
    where: {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    },
  });

  if (isUserWhilelisted)
    return res.status(200).json({
      message: "User already Whitelisted",
    });
  else {
    await prisma.waitlist.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      },
    });

    return res.status(200).json({
      message: "You are Whitelisted",
    });
  }
}
