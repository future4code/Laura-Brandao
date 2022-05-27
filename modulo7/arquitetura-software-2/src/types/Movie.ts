export class Movie {
    constructor(
      private id: string,
      private title: string,
      private description: string,
      private durationInMinutes: number,
      private yearOfRelease: number
    ) { }
  
    getId() {
      return this.id
    }
  
    getTitle() {
      return this.title
    }
  
    getDescription() {
      return this.description
    }
  
    getDurationInMinutes() {
      return this.durationInMinutes
    }
  
    getYearOfRelease() {
      return this.yearOfRelease
    }
  
    setId(newId: string) {
      this.id = newId
    }
  
    setTitle(newTitle: string) {
      this.title = newTitle
    }
  
    setDescription(newDescription: string) {
      this.description = newDescription
    }
  
    setDurationInMinutes(newDurationInMinutes: number) {
      this.durationInMinutes = newDurationInMinutes
    }
  
    setYearOfRelease(newYearOfRelease: number) {
      this.yearOfRelease = newYearOfRelease
    }
  }