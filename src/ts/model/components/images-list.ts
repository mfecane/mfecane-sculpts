import img1 from 'assets/images/albedo.jpg'
import img2 from 'assets/images/biba.jpg'
import img3 from 'assets/images/moto.jpg'
import img4 from 'assets/images/priestess.jpg'
import img5 from 'assets/images/jew-jitsu.jpg'

const img = [img1, img2, img3, img4, img5]

export default class Imageslist {
  collections = []

  constructor() {
    let length = Math.floor(Math.random() * 30)

    this.collections = new Array(length)
      .fill(undefined)
      .map((el, index) => this.createItem(index))
  }

  createItem(index: number) {
    let length = Math.floor(Math.random() * 50)

    let images = new Array(length).fill(undefined).map(() => {
      return img[Math.floor(Math.random() * img.length)]
    })

    return {
      index: index,
      images: images,
    }
  }

  getItems(from: number, num?: number) {
    if (!from && !num) {
      return this.collections.slice()
    }

    if (!num) {
      return this.collections.slice(from, this.collections.length - 1)
    }

    return this.collections.slice(from, num)
  }
}
