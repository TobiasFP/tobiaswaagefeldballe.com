import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-techs3d',
  templateUrl: './techs3d.component.html',
  styleUrls: ['./techs3d.component.scss'],
})
export class Techs3dComponent implements OnInit {
  @ViewChild('canv', { static: true }) canv: ElementRef;
  @Input("img") img: string = "";

  private scene: THREE.Scene;
  private camera: THREE.Camera;
  private renderer: THREE.WebGLRenderer;
  private mesh: THREE.Mesh;
  pos: number;



  constructor() { }

  ngOnInit() {
    const self = this;
    document.addEventListener("touchmove", (e: TouchEvent) => {
      e.preventDefault();

      self.pos = (((360 * (e.targetTouches[0].pageX - window.innerWidth / 2) / window.innerWidth) * Math.PI / 180) / 2) - Math.PI / 2;

      self.mesh.rotation.y = self.pos;

    });

    document.addEventListener('mousemove', (e: MouseEvent) => {
      e.preventDefault();

      self.pos = (((360 * (e.pageX - window.innerWidth / 2) / window.innerWidth) * Math.PI / 180) / 2) - Math.PI / 2;
      self.mesh.rotation.y = self.pos * 2;

    });
    this.init3d();

  }

  init3d() {

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canv.nativeElement,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(100, 100);
    this.renderer.setPixelRatio(2);

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-20, 20, 100, -100, -20, 100);

    const texture = new THREE.TextureLoader().load('assets/explainerImgs/' + this.img);

    var material = new THREE.MeshBasicMaterial({
      map: texture
    });

    material.transparent = true;

    const geometry = new THREE.CylinderGeometry(10, 10, 100, 100);

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.y = -Math.PI / 2;
    this.scene.add(this.mesh);

    const animate = () => {
      requestAnimationFrame(animate);
      this.render();
    };
    requestAnimationFrame(animate);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
    this.mesh.rotation.y += 0.01;
  }

}
