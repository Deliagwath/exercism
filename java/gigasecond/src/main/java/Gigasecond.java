import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond {
	private LocalDateTime date;
    Gigasecond(LocalDate birthDate) {
        this.date = birthDate.atStartOfDay();
    }
    Gigasecond(LocalDateTime birthDateTime) {
        this.date = birthDateTime;
    }
    LocalDateTime getDate() {
        return this.date.plusSeconds(1_000_000_000);
    }
}