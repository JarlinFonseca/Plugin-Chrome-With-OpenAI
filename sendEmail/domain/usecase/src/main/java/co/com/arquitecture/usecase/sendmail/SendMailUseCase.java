package co.com.arquitecture.usecase.sendmail;

import co.com.arquitecture.model.mail.Mail;
import co.com.arquitecture.model.mail.gateways.MailRepository;
import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
public class SendMailUseCase {

    private final MailRepository mailRepository;

    public boolean sendMail(Mail mail){
        return mailRepository.send(mail);
    };

}
