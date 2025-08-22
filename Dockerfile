FROM alpine:3.20
WORKDIR /app
RUN echo "build-time OK" > /app/health.txt
CMD ["sh", "-c", "echo 'run-time OK'; uname -a; ls -la; echo 'health:'; cat /app/health.txt"]