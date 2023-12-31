import React, { useEffect } from 'react';
import Img from '../assets/generic-placeholder.png';

const Gallery = () => {
  useEffect(() => {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer =
      document.querySelector('.gallery-controls');
    const galleryControls = ['previous', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');

    class Carousel {
      constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
      }

      updateGallery() {
        this.carouselArray.forEach((el) => {
          el.classList.remove('gallery-item-1');
          el.classList.remove('gallery-item-2');
          el.classList.remove('gallery-item-3');
          el.classList.remove('gallery-item-4');
          el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
          el.classList.add(`gallery-item-${i + 1}`);
        });
      }

      setCurrentState(direction) {
        if (direction.className === 'gallery-controls-previous') {
          this.carouselArray.unshift(this.carouselArray.pop());
        } else {
          this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
      }

      // setControls() {
      //   this.carouselControls.forEach((control) => {
      //     const button = document.createElement('button');
      //     button.className = `gallery-controls-${control}`;
      //     button.innerText = control;
      //     galleryControlsContainer.appendChild(button);
      //     document.createElement('button')
      //     ).className = `gallery-controls-${control}`;
      //     document.querySelector(`.gallery-controls-${control}`).innerText =
      //     control;
      //   });
      // }

      setControls() {
        this.carouselControls.forEach((control) => {
          galleryControlsContainer.appendChild(
            document.createElement('button')
          ).className = `gallery-controls-${control}`;
          document.querySelector(`.gallery-controls-${control}`).innerText =
            control;
        });
      }

      useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach((control) => {
          control.addEventListener('click', (e) => {
            e.preventDefault();
            this.setCurrentState(control);
          });
        });
      }
    }

    // Cleanup function for removing event listeners
    return () => {
      const triggers = [...galleryControlsContainer.childNodes];
      const exampleCarousel = new Carousel(
        galleryContainer,
        galleryItems,
        galleryControls
      );
      triggers.forEach((control) => {
        control.removeEventListener('click', () => {});
      });
      exampleCarousel.setControls();
      exampleCarousel.useControls();
    };
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className='body'>
      <div className='gallery'>
        <div className='gallery-container'>
          <img
            className='gallery-item gallery-item-1'
            dataindex='1'
            src={Img}
            alt='Img'
          />
          <img
            className='gallery-item gallery-item-2'
            dataindex='2'
            src={Img}
            alt='Img'
          />
          <img
            className='gallery-item gallery-item-3'
            dataindex='3'
            src={Img}
            alt='Img'
          />
          <img
            className='gallery-item gallery-item-4'
            dataindex='4'
            src={Img}
            alt='Img'
          />
          <img
            className='gallery-item gallery-item-5'
            dataindex='5'
            src={Img}
            alt='Img'
          />
        </div>
        <div className='gallery-controls'></div>
      </div>
    </div>
  );
};

export default Gallery;
