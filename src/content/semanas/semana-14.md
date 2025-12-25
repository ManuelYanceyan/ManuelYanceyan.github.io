---
title: "Semana 14 - Microservicios con Django"
week: 14
date: "2025-05-31"
tags: ["Microservicios","Django","Docker","Kubernetes","Backend"]
---

## Resumen

Durante la semana 14 se introdujo el enfoque de arquitectura basada en microservicios para el desarrollo de aplicaciones web backend. Se estudiaron los conceptos fundamentales de los microservicios, su diseño y construcción utilizando Django, así como los mecanismos de comunicación entre servicios. Además, se abordó la gestión de bases de datos en arquitecturas distribuidas, la implementación de microservicios con Docker y Kubernetes, y aspectos clave como la seguridad, el monitoreo, el escalado y el consumo de microservicios desde aplicaciones cliente.


![Semana 114](./imagenes/semana14.png)

## Clase
- **Introducción a los microservicios.**  
  Se explicó el concepto de microservicios como un estilo de arquitectura que divide una aplicación en servicios pequeños, independientes y desplegables de forma autónoma, facilitando la escalabilidad y el mantenimiento.

- **Arquitectura de microservicios.**  
  Se analizó la configuración de una arquitectura basada en microservicios, destacando la separación de responsabilidades, la comunicación entre servicios y la independencia tecnológica.

- **Diseño y construcción de microservicios con Django.**  
  Se trabajó el diseño y desarrollo del primer microservicio utilizando Django, enfocándose en la exposición de funcionalidades específicas mediante APIs.

- **Comunicación entre microservicios.**  
  Se explicó cómo los microservicios se comunican entre sí mediante protocolos HTTP y APIs REST, garantizando el intercambio de información de forma segura y eficiente.

- **Gestión de bases de datos en microservicios.**  
  Se abordó la estrategia de bases de datos por servicio, resaltando la importancia de la independencia de datos y la consistencia en sistemas distribuidos.

- **Implementación de microservicios con Docker.**  
  Se introdujo Docker como herramienta para contenerizar microservicios, facilitando su despliegue, portabilidad y ejecución en distintos entornos.

- **Orquestación con Kubernetes.**  
  Se explicó el uso de Kubernetes para la gestión, despliegue y orquestación de microservicios, permitiendo el manejo de múltiples contenedores de forma automatizada.

- **Protección de microservicios.**  
  Se revisaron mecanismos de seguridad para microservicios, incluyendo autenticación, autorización y control de acceso a los servicios expuestos.

- **Monitoreo y escalado de microservicios.**  
  Se abordaron conceptos de monitoreo y escalado automático para asegurar la disponibilidad, rendimiento y tolerancia a fallos en sistemas basados en microservicios.

- **Consumo de microservicios.**  
  Se explicó cómo consumir microservicios desde aplicaciones cliente o desde otros servicios, integrando datos y funcionalidades de manera distribuida.

## Laboratorio
- **Laboratorio 14:**  
  Desarrollo e implementación de un microservicio utilizando Django.  
  Contenerización del microservicio con Docker, despliegue básico con Kubernetes y pruebas de consumo del servicio desde una aplicación cliente.
