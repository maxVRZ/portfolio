import { Resend } from "resend";

const resend = new Resend(ProcessingInstruction.env.RESEND_API_KEY);

const handler = async(req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json
    }
}