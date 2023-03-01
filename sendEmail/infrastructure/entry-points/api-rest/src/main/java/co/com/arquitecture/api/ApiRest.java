package co.com.arquitecture.api;
import co.com.arquitecture.model.mail.Mail;
import co.com.arquitecture.usecase.sendmail.SendMailUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {

    private final SendMailUseCase sendMailUseCase;


    @PostMapping(path = "/sendMail")
    @CrossOrigin
    public ResponseEntity<Object> commandName(@RequestBody Mail mail) {
        boolean send = sendMailUseCase.sendMail(mail);
        return send?new ResponseEntity<>("Mail was send", HttpStatus.OK):new ResponseEntity<>("there is an error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
