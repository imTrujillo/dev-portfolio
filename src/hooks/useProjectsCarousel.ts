// hooks/useProjectsCarousel.ts
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import photo1 from "../assets/images/projects-carousel/1.png";
import photo2 from "../assets/images/projects-carousel/2.jpeg";
import photo3 from "../assets/images/projects-carousel/3.png";
import photo4 from "../assets/images/projects-carousel/4.png";
import photo5 from "../assets/images/projects-carousel/5.png";
import photo6 from "../assets/images/projects-carousel/6.png";

import video1 from "../assets/videos/projects-details/1.mp4";
import video2 from "../assets/videos/projects-details/2.mp4";
import video3 from "../assets/videos/projects-details/3.mp4";
import video4 from "../assets/videos/projects-details/4.mp4";
import video5 from "../assets/videos/projects-details/5.mp4";
import video6 from "../assets/videos/projects-details/6.mp4";

import logo1 from "../assets/images/projects-carousel/logo1.png";
import logo2 from "../assets/images/projects-carousel/logo2.png";
import logo3 from "../assets/images/projects-carousel/logo3.png";
import logo4 from "../assets/images/projects-carousel/logo4.png";
import logo5 from "../assets/images/projects-carousel/logo5.png";
import logo6 from "../assets/images/projects-carousel/logo6.png";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectData {
  logo: string;
  title: string;
  image: string;
  video: string;
  description: string;
  technologies?: string[];
  link?: string;
  github?: string;
}

export const projectData: ProjectData[] = [
  {
    logo: logo1,
    title: "Galería de Arte",
    image: photo1,
    video: video1,
    description:
      "Este proyecto consiste en una aplicación web robusta desarrollada en PHP puro, diseñada para digitalizar y exponer el catálogo de un emprendimiento artístico. La arquitectura implementa un patrón MVC-like inspirado en Laravel, garantizando una separación clara entre la lógica de datos y la interfaz de usuario. Incluye una gestión eficiente de obras y categorías utilizando SQLite y un sistema modular de componentes. Su interfaz fue construida con Tailwind CSS y reactividad ligera mediante Alpine.js, priorizando el rendimiento y la adaptabilidad en dispositivos móviles. ",
    technologies: ["PHP", "SQLite", "Tailwind", "Alpine.js"],
    link: "http://www.steven-drawing-gallery.infinityfree.me/",
    github: "https://github.com/imTrujillo/drawing-portfolio",
  },
  {
    logo: logo2,
    title: "Musikool",
    image: photo2,
    video: video2,
    description:
      "MusiKool es una plataforma educativa integral para músicos autodidactas que combina una app móvil nativa en Kotlin con un backend en Laravel 11. Su propósito es guiar el aprendizaje de piano y guitarra sin necesidad de un instructor, ofreciendo un entorno interactivo donde la teoría musical (escalas, acordes y métrica) se aplica directamente a un amplio catálogo de canciones. A través de una API REST, la aplicación gestiona de forma sincronizada el progreso del usuario, la visualización de notas por compases y una biblioteca de recursos técnicos, transformando el estudio musical en una experiencia digital estructurada y moderna.",
    technologies: ["Kotlin", "Laravel", "MySQL"],
    github: "https://github.com/imTrujillo/musiKool",
  },
  {
    logo: logo3,
    title: "Físilab",
    image: photo3,
    video: video3,
    description:
      "FísiLab es una plataforma educativa interactiva diseñada específicamente para estudiantes de Ingeniería de la Universidad Evangélica de El Salvador. Inspirada en la metodología de aprendizaje progresivo de Duolingo, el proyecto digitaliza los contenidos de Física I, II y III (basados en Sears & Zemansky), transformando el estudio teórico en una experiencia de aprendizaje gamificada y estructurada por niveles de maestría.",
    technologies: ["Next.js", "React", "Typescript", "Tailwind", "PostgreSQL"],
    link: "https://fisilab.vercel.app/",
    github: "https://github.com/imTrujillo/fisilab",
  },
  {
    logo: logo4,
    title: "PressStart",
    image: photo4,
    video: video4,
    description:
      "PressStart es una solución de comercio electrónico de alto rendimiento que integra un backend robusto en .NET 8 con una interfaz dinámica en React. El sistema destaca por su arquitectura limpia y un flujo transaccional completo que utiliza Stripe para procesar pagos seguros y emitir facturas automáticas mediante webhooks. Además, garantiza la seguridad y el orden operativo a través de una gestión de usuarios basada en roles y autenticación con tokens JWT, permitiendo administrar desde el catálogo de productos hasta reportes financieros en una infraestructura escalable desplegada en la nube.",
    technologies: ["ASP.NET", "PostgreSQL", "Stripe", "React", "Bootstrap"],
    link: "https://pressstart-sv.vercel.app/",
    github: "https://github.com/imTrujillo/pressStart-ecommerce",
  },

  {
    logo: logo5,
    title: "LACOMBI",
    image: photo5,
    video: video5,
    description:
      "LaCombi es un ecosistema digital para la gestión integral de rutas de transporte que articula un backend robusto en Laravel 11 con una interfaz reactiva en React. La plataforma optimiza la logística operativa mediante un sistema de control de acceso basado en roles que permite a los administradores gestionar la flota y horarios, a los motoristas controlar sus viajes asignados y a los pasajeros consultar rutas o solicitar servicios sin necesidad de registro. La arquitectura destaca por su seguridad implementada con Sanctum y Spatie, garantizando que cada transacción y consulta de datos esté protegida, mientras que su infraestructura se apoya en una base de datos MySQL y una documentación automatizada con Swagger para facilitar su escalabilidad y mantenimiento en la nube.",
    technologies: [
      "Laravel",
      "Swagger",
      "MySQL",
      "React",
      "Javascript",
      "Bootstrap",
    ],
    link: "https://lacombi.vercel.app/",
    github: "https://github.com/imTrujillo/la-combi-sv",
  },
  {
    logo: logo6,
    title: "GRAVIFLOO",
    image: photo6,
    video: video6,
    description:
      "Gravifloo es una experiencia lúdica y educativa desarrollada en Construct 2 que permite a los usuarios explorar los principios fundamentales de la física a través de un entorno interactivo y dinámico. El videojuego articula el aprendizaje progresivo mediante niveles que simulan diferentes condiciones gravitacionales, desde la aceleración terrestre hasta la ligereza lunar, obligando al jugador a adaptar sus estrategias de salto y movimiento según las leyes de la mecánica clásica. El motor físico del juego gestiona de forma precisa la interacción entre diversos proyectiles con propiedades de masa y aceleración únicas, así como estructuras compuestas por materiales con distintos niveles de resistencia y fragilidad.",
    technologies: ["Construct2", "Blender", "Illustrator"],
    link: "https://gravifloo.netlify.app/",
    github: "https://github.com/imTrujillo/gravifloo",
  },
];

function useProjectsCarousel(): void {
  const navigate = useNavigate();

  useEffect(() => {
    const initCarousel = () => {
      const wrap = document.querySelector<HTMLElement>("#projects-section");
      if (!wrap) {
        console.warn("Projects section not found");
        return null;
      }

      let canvas =
        document.querySelector<HTMLCanvasElement>("#projects-canvas");
      let overlayContainer =
        document.querySelector<HTMLDivElement>("#projects-overlay");
      let createdCanvas = false;
      let createdOverlay = false;

      // Crear canvas
      if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "projects-canvas";

        wrap.style.position = "relative";
        wrap.style.overflow = "hidden";
        wrap.style.isolation = "isolate";

        canvas.style.position = "fixed";
        canvas.style.top = "20%";
        canvas.style.left = "0";
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
        canvas.style.zIndex = "0";
        canvas.style.pointerEvents = "none";
        canvas.style.opacity = "0";

        wrap.appendChild(canvas);
        createdCanvas = true;
      }

      // Crear contenedor de overlays de texto
      if (!overlayContainer) {
        overlayContainer = document.createElement("div");
        overlayContainer.id = "projects-overlay";
        overlayContainer.style.position = "fixed";
        overlayContainer.style.top = "20%";
        overlayContainer.style.left = "0";
        overlayContainer.style.width = "100vw";
        overlayContainer.style.height = "100vh";
        overlayContainer.style.zIndex = "100";
        overlayContainer.style.pointerEvents = "none";
        overlayContainer.style.opacity = "0";
        overlayContainer.style.background =
          "linear-gradient(to bottom, transparent, black)";

        wrap.appendChild(overlayContainer);
        createdOverlay = true;
      }

      Array.from(wrap.children).forEach((child) => {
        if (
          child !== canvas &&
          child !== overlayContainer &&
          child instanceof HTMLElement
        ) {
          child.style.position = child.style.position || "relative";
          child.style.zIndex = "10";
        }
      });

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.set(0, 0.3, 1.75);
      camera.lookAt(0, 0, 0);

      const textureLoader = new THREE.TextureLoader();
      const textures = projectData.map((project) =>
        textureLoader.load(project.image)
      );

      const geometry = new THREE.PlaneGeometry(1, 0.75, 10, 10);
      const uOffset = new THREE.Vector2(0, 0);

      // Crear cards clickeables con overlay de texto
      const cardElements: HTMLDivElement[] = [];

      const items: {
        mesh: THREE.Mesh;
        index: number;
        cardEl: HTMLDivElement;
      }[] = textures.map((tex, i) => {
        const material = new THREE.ShaderMaterial({
          uniforms: {
            uOffset: { value: uOffset },
            uTexture: { value: tex },
            uAlpha: { value: 0.0 },
          },
          vertexShader: `
              uniform vec2 uOffset;
              varying vec2 vUv;
              void main() {
                vUv = uv;
                vec3 newPosition = position;
                newPosition.x -= sin(uv.y * 3.14159) * uOffset.x;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
              }
            `,
          fragmentShader: `
              varying vec2 vUv;
              uniform sampler2D uTexture;
              uniform float uAlpha;
              void main() {
                vec4 color = texture2D(uTexture, vUv);
                gl_FragColor = vec4(color.rgb, color.a * uAlpha);
              }
            `,
          transparent: true,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = i * 1.1;
        scene.add(mesh);

        // Crear elemento HTML para el overlay de texto
        const cardEl = document.createElement("div");
        cardEl.style.position = "absolute";
        cardEl.style.pointerEvents = "auto";
        cardEl.style.cursor = "pointer";
        cardEl.style.transition = "transform 0.3s ease";
        cardEl.innerHTML = ` 
          <div class="card-overlay"> 
            <img src="${projectData[i].logo}" /> 
            <div> 
              <h3>${projectData[i].title}</h3> 
              <p>Click para ver detalles</p> 
            </div> 
          </div> `;

        cardEl.addEventListener("mouseenter", () => {
          cardEl.style.transform = "scale(1.05)";
          const border = cardEl.querySelector(".card-border") as HTMLElement;
          if (border) border.style.borderColor = "rgba(255,255,255,0.6)";
        });

        cardEl.addEventListener("mouseleave", () => {
          cardEl.style.transform = "scale(1)";
          const border = cardEl.querySelector(".card-border") as HTMLElement;
          if (border) border.style.borderColor = "rgba(255,255,255,0.2)";
        });

        cardEl.addEventListener("click", () => {
          const slug = projectData[i].title.toLowerCase().replace(/\s+/g, "-");
          navigate(`/proyecto/${slug}`);
        });

        overlayContainer!.appendChild(cardEl);
        cardElements.push(cardEl);

        return { mesh, index: i, cardEl };
      });

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      let smoothProgress = 0;
      let masterOpacity = 1;
      let targetOpacity = 1;

      const st = ScrollTrigger.create({
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        scrub: false,
        onEnter: () => {
          targetOpacity = 1;
        },
        onLeave: () => {
          targetOpacity = 1;
        },
        onEnterBack: () => {
          targetOpacity = 1;
        },
        onLeaveBack: () => {
          targetOpacity = 1;
        },
      });

      const stPin = ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.05) {
            masterOpacity = gsap.utils.mapRange(1, 0.7, 1, 1, progress);
          } else if (progress > 0.9) {
            masterOpacity = gsap.utils.mapRange(0.9, 1, 1, 1, progress);
          } else {
            masterOpacity = 1;
          }
        },
      });

      const updateMeshes = () => {
        const targetProgress = stPin.progress;
        smoothProgress += (targetProgress - smoothProgress) * 0.1;

        items.forEach((item) => {
          const rawX = 1.1 * item.index - smoothProgress * 10;
          item.mesh.position.x =
            ((rawX + 42069 * items.length) % (items.length * 1.1)) - 2.2;

          const distanceFromCenter = Math.abs(item.mesh.position.x);
          const positionAlpha = Math.max(
            0,
            Math.min(1, 1 - distanceFromCenter / 3)
          );

          const mat = item.mesh.material as THREE.ShaderMaterial;
          mat.uniforms.uAlpha.value = positionAlpha * masterOpacity;

          // Actualizar posición del overlay de texto
          const vector = new THREE.Vector3(
            item.mesh.position.x,
            item.mesh.position.y,
            item.mesh.position.z
          );
          vector.project(camera);

          const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
          const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;

          const cardWidth = 350;
          const cardHeight = 260;

          item.cardEl.style.left = `${x - cardWidth / 2}px`;
          item.cardEl.style.top = `${y - cardHeight / 2}px`;
          item.cardEl.style.width = `${cardWidth}px`;
          item.cardEl.style.height = `${cardHeight}px`;
          item.cardEl.style.opacity = (
            positionAlpha * masterOpacity
          ).toString();
        });

        if (canvas) {
          const currentOpacity = parseFloat(canvas.style.opacity || "0");
          const newOpacity =
            currentOpacity + (targetOpacity - currentOpacity) * 0.1;
          canvas.style.opacity = newOpacity.toString();
        }

        if (overlayContainer) {
          overlayContainer.style.opacity = canvas?.style.opacity || "0";
        }
      };

      let rafId = 0;
      const render = () => {
        const velocity = stPin.getVelocity ? stPin.getVelocity() : 0;
        uOffset.set(stPin.isActive ? velocity * 0.00002 : 0, 0);
        updateMeshes();
        renderer.render(scene, camera);
        rafId = requestAnimationFrame(render);
      };

      render();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);

        if (rafId) cancelAnimationFrame(rafId);

        if (st && typeof st.kill === "function") st.kill();
        if (stPin && typeof stPin.kill === "function") stPin.kill();

        items.forEach((it) => {
          const mat = it.mesh.material as any;
          if (mat) {
            if (mat.uniforms?.uTexture?.value?.dispose) {
              mat.uniforms.uTexture.value.dispose();
            }
            if (mat.dispose) mat.dispose();
          }
          if (it.mesh.geometry?.dispose) {
            it.mesh.geometry.dispose();
          }
        });

        renderer.dispose();

        if (createdCanvas && canvas?.parentElement) {
          canvas.parentElement.removeChild(canvas);
        }

        if (createdOverlay && overlayContainer?.parentElement) {
          overlayContainer.parentElement.removeChild(overlayContainer);
        }
      };
    };

    let cleanup: (() => void) | null = null;

    const timeoutId = setTimeout(() => {
      cleanup = initCarousel();
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (cleanup) cleanup();
    };
  }, []);
}

export default useProjectsCarousel;
