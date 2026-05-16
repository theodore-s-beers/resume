FROM oven/bun:1-slim

WORKDIR /app
COPY index.ts fallback.html ./

CMD ["bun", "run", "index.ts"]
