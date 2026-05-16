FROM oven/bun:1-slim

WORKDIR /app
COPY index.ts resume.ts schema.ts fallback.html ./

CMD ["bun", "run", "index.ts"]
