import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

class KindergartenGarden {

    private HashMap<String, List<Plant>> garden;
    KindergartenGarden(String garden, String[] students) {
        String[] rows = garden.split("\n");
        String upperRow = rows[0];
        String lowerRow = rows[1];

        this.garden = new HashMap<String, List<Plant>>();
        List<Plant> plants;

        Arrays.sort(students);
        
        for (int i = 0; i < rows[0].length(); i += 2) {
            plants = Arrays.asList(
                Plant.getPlant(upperRow.charAt(i)),
                Plant.getPlant(upperRow.charAt(i + 1)),
                Plant.getPlant(lowerRow.charAt(i)),
                Plant.getPlant(lowerRow.charAt(i + 1))
            );
            this.garden.put(students[i / 2], plants);
        }
    }

    KindergartenGarden(String garden) {
        this(
            garden,
            new String[] {
                "Alice", "Bob", "Charlie", "David",
                "Eve", "Fred", "Ginny", "Harriet",
                "Ileana", "Joseph", "Kincaid", "Larry"
            });
    }

    List<Plant> getPlantsOfStudent(String student) {
        return this.garden.get(student);
    }
}