public class Main {
    public static void main(String[] args) {
        GestorAcademico gestor = new GestorAcademico();

        // Crear dos estudiantes
        Estudiante estudiante1 = new Estudiante(1, "Juan", "Pérez", "2000-01-01", Estudiante.Estado.MATRICULADO);
        Estudiante estudiante2 = new Estudiante(2, "María", "González", "1999-05-05", Estudiante.Estado.GRADUADO);

        // Crear dos cursos
        Curso curso1 = new Curso(101, "Matemáticas", "Curso básico de matemáticas", 4, "1.0");
        Curso curso2 = new Curso(102, "Historia", "Curso de historia universal", 3, "1.1");

        // Agregar estudiantes y cursos al gestor
        gestor.matricularEstudiante(estudiante1);
        gestor.matricularEstudiante(estudiante2);
        gestor.agregarCurso(curso1);
        gestor.agregarCurso(curso2);

        try {
            // Inscribir estudiantes en cursos
            gestor.inscribirEstudianteCurso(estudiante1, 101);
            gestor.inscribirEstudianteCurso(estudiante2, 102);

            // Desinscribir un estudiante de un curso
            gestor.desinscribirEstudianteCurso(1, 101);

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
