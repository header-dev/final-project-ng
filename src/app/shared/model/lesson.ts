
export class Lesson {

    constructor(
        public $key: string,
        public courseId: string,
        public description: string,
        public duration: string,
        public url: string,
        public tags: string,
        public videoUrl: string,
        public longDescription: string
    ) {
    }

    get isBeginner() {
        return this.tags && this.tags.includes('BEGINNER');
    }

    static fromJsonList(array): Lesson[] {
        return array.map(Lesson.fromJson);
    }

    static fromJson({ $key, courseId, description, duration,
        url, tags, videoUrl, longDescription }): Lesson {

        return new Lesson(
            $key, courseId, description, duration,
            url, tags, videoUrl, longDescription
        );

    }

}