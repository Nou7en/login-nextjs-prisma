# Proyecto de Autenticación con Next.js, NextAuth y Prisma

Este es un proyecto construido con [Next.js](https://nextjs.org/), utilizando [NextAuth](https://next-auth.js.org/) para la autenticación y [Prisma](https://www.prisma.io/) como ORM para la interacción con la base de datos PostgreSQL.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para desarrollo de aplicaciones web modernas.
- **NextAuth**: Solución completa para manejar la autenticación con soporte para múltiples proveedores.
- **Prisma**: ORM de nueva generación para gestionar la base de datos de forma eficiente.
- **PostgreSQL**: Base de datos relacional utilizada para almacenar los datos de autenticación y otros.

## Configuración Inicial

### Requisitos Previos

Antes de empezar, asegúrate de tener lo siguiente instalado:

- **Node.js** (versión 14 o superior)
- **PostgreSQL** (local o en un servidor)
- **Git** (opcional pero recomendado)

### Variables de Entorno

Configura un archivo `.env` en la raíz del proyecto con las siguientes variables:

# URL de conexión a la base de datos PostgreSQL
DATABASE_URL="postgresql://<usuario>:<contraseña>@localhost:5432/<nombre_base_datos>?schema=public"

# Secretos para NextAuth
NEXTAUTH_SECRET="el token generado"

# URL de la aplicación
NEXTAUTH_URL="http://localhost:3000"

## Documentación y Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de NextAuth](https://next-auth.js.org/getting-started/introduction)
- [Documentación de Prisma](https://www.prisma.io/docs/getting-started)
- [Documentación de PostgreSQL](https://www.postgresql.org/docs/)
- Video de referencia: https://www.youtube.com/watch?v=iZDK42F2cTc

  




