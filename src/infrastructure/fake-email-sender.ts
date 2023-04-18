import { EmailSender } from "../domain/email-sender";

export class FakeEmailSender implements EmailSender {
  async send(email: string, text: string): Promise<void> {
    console.log(`Simultaing email to ${email}, text: ${text}`);
  }
}
