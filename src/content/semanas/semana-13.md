---
title: "Semana 13 - Diseño de APIs RESTful"
week: 13
date: "2025-05-24"
tags: ["API","REST","HATEOAS","Serialización","Django","Backend"]
---

## Resumen

Durante la semana 13 se abordó el diseño y construcción de APIs RESTful para aplicaciones web backend. Se estudiaron los principios de REST, el concepto de APIs de hipermedios y HATEOAS, así como la serialización de modelos y otras fuentes de datos. Además, se trabajaron mecanismos de filtrado, paginación y límites temporales de uso para asegurar escalabilidad y control de consumo. Finalmente, se revisaron ruteadores, conjuntos de vistas e integración con AJAX, incluyendo consideraciones de seguridad como CSRF y CORS, culminando con el desarrollo de un sistema web backend basado en APIs.
![Semana 13](/imagenes/semana13.png)

## Clase
- **Introducción a REST y APIs RESTful.**  
  Se explicó REST como un estilo arquitectónico para la construcción de servicios web, basado en recursos, operaciones HTTP y comunicación sin estado, facilitando la interoperabilidad entre sistemas.

- **Recursos, endpoints y métodos HTTP.**  
  Se trabajó la definición de recursos y endpoints, así como el uso correcto de métodos HTTP (GET, POST, PUT/PATCH, DELETE) para operaciones CRUD sobre los datos.

- **APIs de hipermedios y HATEOAS.**  
  Se introdujo el concepto de hipermedios como mecanismo para guiar al cliente mediante enlaces, y HATEOAS como principio que mejora la navegabilidad y auto-descripción de la API.

- **Serialización de modelos y fuentes de datos.**  
  Se explicó la serialización como proceso para convertir objetos (por ejemplo, modelos de base de datos) en formatos intercambiables como JSON, permitiendo exponer información de manera estructurada y consumible por clientes.

- **Filtrado y paginación.**  
  Se abordó el uso de filtros para consultas específicas y la paginación para controlar la cantidad de resultados por respuesta, mejorando rendimiento y experiencia de consumo.

- **Límites temporales de uso (rate limiting).**  
  Se explicó el control de consumo mediante límites temporales para prevenir abuso del servicio, proteger recursos del servidor y garantizar disponibilidad para múltiples clientes.

- **Ruteadores y conjuntos de vistas.**  
  Se trabajó el enrutamiento de endpoints y la organización mediante conjuntos de vistas para estructurar la API de forma modular, clara y mantenible.

- **Integración con AJAX.**  
  Se explicó cómo consumir APIs desde el frontend mediante AJAX, permitiendo obtener y enviar datos sin recargar la página, favoreciendo aplicaciones dinámicas.

- **Seguridad: CSRF y CORS.**  
  Se revisaron medidas de seguridad como la protección CSRF en solicitudes y la configuración CORS para controlar el acceso a la API desde distintos orígenes, evitando vulnerabilidades comunes.

## Laboratorio
- **Laboratorio 13:**  
  Desarrollo de un sistema web backend exponiendo funcionalidades mediante una API RESTful.  
  Implementación de endpoints, serialización de datos, filtrado y paginación, además de pruebas de consumo desde un cliente (AJAX) considerando configuraciones de seguridad como CSRF y CORS.
