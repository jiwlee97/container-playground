# 빌드 단계
FROM openjdk:17-jdk-slim AS build

WORKDIR /kwon

COPY ./kwon .

RUN ./gradlew build

# 실행 단계
FROM openjdk:17-jdk-slim AS production

WORKDIR /app

COPY --from=build /kwon/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]