import React, { useRef, useEffect } from 'react';
    import * as THREE from 'three';

    function TerrariumView({ plant }) {
      const mountRef = useRef(null);
      useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add plant to the scene
        const plantGeometry = new THREE.BoxGeometry();
        const plantMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const plantMesh = new THREE.Mesh(plantGeometry, plantMaterial);
        scene.add(plantMesh);

        camera.position.z = 5;

        const animate = function () {
          requestAnimationFrame(animate);
          plantMesh.rotation.x += 0.01;
          plantMesh.rotation.y += 0.01;
          renderer.render(scene, camera);
        };

        animate();

        return () => {
          mountRef.current.removeChild(renderer.domElement);
        };
      }, [plant]);

      return <div ref={mountRef} className="w-full h-96 bg-gray-200"></div>;
    }

    export default TerrariumView;
