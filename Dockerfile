# Escolhe a imagem base com JDK 21
FROM eclipse-temurin:21-jdk-alpine

# Cria uma pasta dentro do container para o app
WORKDIR /app

# Copia o JAR do projeto para dentro do container
COPY target/integracao-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta que o Spring Boot vai usar
EXPOSE 8080

# Comando para rodar o backend
ENTRYPOINT ["java","-jar","/app/app.jar"]
