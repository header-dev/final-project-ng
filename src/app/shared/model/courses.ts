export class Courses {
    constructor(
        public $key: string,
        public url: string,
        public description: string,
        public iconUrl: string,
        public courseListIcon: string,
        public longDescription: string,
    ) {
    }

    static fromJsonArray(json: any[]): Courses[] {
        return json.map(Courses.fromJson);
    }

    static fromJson({ $key, url, description,
        iconUrl, courseListIcon, longDescription }): Courses {

        return new Courses(
            $key, url, description,
            iconUrl, courseListIcon, longDescription
        );

    }
}