# Usa JDK 21
FROM eclipse-temurin:21-jdk-alpine

# Instala Maven e dependências do build
RUN apk add --no-cache maven bash

# Define diretório do app dentro do container
WORKDIR /app

# Copia todos os arquivos do projeto
COPY . .

# Build do projeto dentro do container
RUN mvn clean package -DskipTests

# Expõe a porta que o Spring Boot vai usar
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["java", "-jar", "target/integracao-0.0.1-SNAPSHOT.jar"]

