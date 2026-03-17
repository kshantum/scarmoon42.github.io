# Teacher Assessment & Open Lessons System

Комплексная система для оценки преподавателей, проведения открытых занятий и управления учебными материалами.

## 🌟 Основные возможности

- 📋 **Открытые занятия**: Создание, планирование и оценка занятий студентами (через QR-коды) и экспертами.
- 📝 **GIFT Формат**: Полная поддержка формата GIFT для создания тестов и анкет. Единый механизм рендеринга и обработки результатов.
- 📂 **Управление УМК**: Загрузка и проверка учебно-методических комплексов и документов повышения квалификации преподавателей.
- 📊 **Рейтинговая система**: Автоматический расчет рейтинга преподавателей на основе отзывов студентов, оценок экспертов и результатов тестирования.
- 🔐 **Безопасность**: Интеграция с Keycloak для надежной аутентификации и управления ролями (Секретарь, Преподаватель, Эксперт).

## 🏗️ Технологический стек

### Основной стек
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Radix UI.
- **Backend**: Express.js, Node.js, TypeScript.
- **Database**: PostgreSQL 17 (через Prisma ORM).
- **Auth**: Keycloak.
- **Cache**: Redis.

### Инфраструктура
- Docker & Docker Compose
- Prometheus & Grafana (мониторинг)
- Loki (логирование)

## 🚀 Быстрый старт

### Запуск через Docker Compose (рекомендуется)

Система включает все необходимые сервисы: PostgreSQL, Redis, Keycloak и само приложение.

1.  **Создайте файл `.env`** в корне проекта (рядом с `docker-compose.yml`) с вашими настройками (опционально, используются значения по умолчанию):

    ```bash
    # Приложение
    APP_PORT=30543
    APP_IMAGE=ghcr.io/scarmoon42/sitedraft:latest
    NODE_ENV=production
    
    # База данных приложения
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=password
    POSTGRES_DB=myapp
    
    # Keycloak
    KEYCLOAK_DB_USER=keycloak
    KEYCLOAK_DB_PASSWORD=keycloak-password
    KEYCLOAK_DB_NAME=keycloak
    KEYCLOAK_ADMIN_USER=admin
    KEYCLOAK_ADMIN_PASSWORD=admin
    KEYCLOAK_REALM=app
    KEYCLOAK_CLIENT_ID=frontend
    
    # CORS (разрешённые домены)
    CORS_ORIGIN=*
    ```

2.  **Запустите все сервисы**:

    ```bash
    docker compose up -d
    ```

3.  **Проверьте статус**:

    ```bash
    docker compose ps
    ```

4.  **Доступ к сервисам**:
    - **Приложение**: http://localhost:30543 (порт настраивается через `APP_PORT`)
    - **Keycloak**: http://localhost:8080 (логин: `admin`, пароль: `admin`)
    - **PostgreSQL**: localhost:5432
    - **Redis**: localhost:6379

5.  **Остановка**:

    ```bash
    docker compose down
    ```

    Для удаления всех данных (включая базы данных):

    ```bash
    docker compose down -v
    ```

### Локальная разработка

1.  **Установка зависимостей**:
    ```bash
    npm install
    ```

2.  **Запуск базы данных и инфраструктуры** (опционально, если не используете Docker Compose):
    ```bash
    docker compose up db redis keycloak-db keycloak -d
    ```

3.  **Настройка переменных окружения**:
    Создайте файл `.env` в корне проекта:
    ```bash
    DATABASE_URL=postgresql://postgres:password@localhost:5432/myapp?schema=public
    REDIS_URL=redis://localhost:6379
    KEYCLOAK_URL=http://localhost:8080
    KEYCLOAK_REALM=app
    KEYCLOAK_CLIENT_ID=frontend
    ```

4.  **Миграции и сиды**:
    ```bash
    npx prisma migrate dev
    npm run db:seed
    ```

5.  **Запуск**:
    ```bash
    # Терминал 1: Бэкенд
    npm run dev:server
    
    # Терминал 2: Фронтенд
    npm run dev
    ```

## 📖 Документация по компонентам

- [GIFT Формат и Парсер](./IMPLEMENTATION_SUMMARY.md#3-реализован-функционал-загрузки-и-управления-gift-форматом)
- [Руководство по загрузке файлов](./FILES_UPLOAD_GUIDE.md)
- [Настройка Keycloak](./KEYCLOAK_SETUP.md)

## 🛠️ Разработка

### Скрипты
- `npm run dev` — запуск фронтенда (порт 3000)
- `npm run dev:server` — запуск бэкенда (порт 3001)
- `npm run db:migrate` — создание миграций БД
- `npm run test` — запуск тестов

---
*Проект разработан для автоматизации процессов аттестации и повышения качества образования.*
