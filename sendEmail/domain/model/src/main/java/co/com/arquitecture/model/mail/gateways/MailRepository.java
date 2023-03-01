package co.com.arquitecture.model.mail.gateways;

import co.com.arquitecture.model.mail.Mail;

public interface MailRepository {

    public boolean send(Mail mail);
}
