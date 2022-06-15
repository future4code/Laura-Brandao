export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
        super(message)
    }
}

export class InvalidName extends CustomError {
    constructor() {
        super(400, "Invalid name")
    }
}

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, "Invalid email")
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Invalid password")
    }
}
