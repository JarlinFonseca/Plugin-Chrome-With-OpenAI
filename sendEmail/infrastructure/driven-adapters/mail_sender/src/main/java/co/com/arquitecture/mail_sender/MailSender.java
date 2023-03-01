package co.com.arquitecture.mail_sender;

import co.com.arquitecture.model.mail.Mail;
import co.com.arquitecture.model.mail.gateways.MailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class MailSender implements MailRepository {


    @Autowired
    private JavaMailSender sender;


    @Override
    public boolean send(Mail mail) {
        boolean send = false;
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        try {
            helper.setTo(mail.getAddressee());
            helper.setText(mail.getBody(), true);
            helper.setSubject(mail.getSubject());
            sender.send(message);
            send = true;
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
        return send;
    }


}
