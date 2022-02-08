import {render, screen} from '@testing-library/react';
import FollowersList from '../FollowersList';
import {BrowserRouter} from "react-router-dom";

const mockResponse = {
    results: [{
        "gender": "female",
        "name": {"title": "LALALAL", "first": "LALALALAL", "last": "Wulf"},
        "location": {
            "street": {"number": 3838, "name": "Kirchstraße"},
            "city": "Stendal",
            "state": "Bayern",
            "country": "Germany",
            "postcode": 11831,
            "coordinates": {"latitude": "-40.2023", "longitude": "23.1289"},
            "timezone": {"offset": "+6:00", "description": "Almaty, Dhaka, Colombo"}
        },
        "email": "miroslawa.wulf@example.com",
        "login": {
            "uuid": "bf2c68d1-073d-433e-9293-b3d08d52d142",
            "username": "bluepanda291",
            "password": "mistress",
            "salt": "Co2op6tk",
            "md5": "1bd83b8064186526502b90b7c3ebe316",
            "sha1": "a25b2643c2be0e8069a855b9b5907278e220c0ec",
            "sha256": "54a819f3cd635cbda75c0fcd092759d69b435d328a7765d1471208c63f9510c6"
        },
        "dob": {"date": "1989-09-22T04:49:23.619Z", "age": 33},
        "registered": {"date": "2002-11-29T00:51:47.528Z", "age": 20},
        "phone": "0831-8021432",
        "cell": "0177-0041104",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/49.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
        },
        "nat": "DE"
    }, {
        "gender": "male",
        "name": {"title": "Mr", "first": "Jay", "last": "Jensen"},
        "location": {
            "street": {"number": 7139, "name": "Tara Street"},
            "city": "ALON",
            "state": "Clare",
            "country": "Ireland",
            "postcode": 80291,
            "coordinates": {"latitude": "-2.8462", "longitude": "-45.0265"},
            "timezone": {"offset": "-8:00", "description": "Pacific Time (US & Canada)"}
        },
        "email": "jay.jensen@example.com",
        "login": {
            "uuid": "4c106221-7a77-472b-951c-ebcb57b288c8",
            "username": "orangerabbit602",
            "password": "longjohn",
            "salt": "6RYUuCQl",
            "md5": "e03dffaed63627c8c5f5d35fbea6bc77",
            "sha1": "d7805224c80d356c354c01f4761d6e8b06541b2b",
            "sha256": "cd44ddab8075aba98b71aeb52e3622ca3cd435d1c701a835949c518e9a475576"
        },
        "dob": {"date": "1961-04-02T13:38:58.726Z", "age": 61},
        "registered": {"date": "2003-02-13T20:34:48.345Z", "age": 19},
        "phone": "041-092-7109",
        "cell": "081-223-3249",
        "id": {"name": "PPS", "value": "2853118T"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/44.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
        },
        "nat": "IE"
    }, {
        "gender": "female",
        "name": {"title": "Mrs", "first": "مرسانا", "last": "قاسمی"},
        "location": {
            "street": {"number": 9977, "name": "سبلان جنوبی"},
            "city": "DDDDD",
            "state": "خراسان رضوی",
            "country": "Iran",
            "postcode": 82385,
            "coordinates": {"latitude": "-34.7604", "longitude": "-161.4517"},
            "timezone": {"offset": "+6:00", "description": "Almaty, Dhaka, Colombo"}
        },
        "email": "mrsn.qsmy@example.com",
        "login": {
            "uuid": "771f3c20-e435-4537-a4c9-522daaa78cf5",
            "username": "bigzebra986",
            "password": "zhui",
            "salt": "T0ladzgy",
            "md5": "27f8be365cb05ad65f391de0984acaac",
            "sha1": "c5a087baba2dad432147b71fd2c610ffb7fb8cf6",
            "sha256": "38abe12573e87730483a97b13e4d87d5fd6df15ed76c20a6af9ad4ee25fe0ed2"
        },
        "dob": {"date": "1946-01-10T12:26:55.970Z", "age": 76},
        "registered": {"date": "2004-01-27T05:36:33.686Z", "age": 18},
        "phone": "058-89899098",
        "cell": "0992-180-0390",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/9.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
        },
        "nat": "IR"
    }, {
        "gender": "female",
        "name": {"title": "Madame", "first": "Carla", "last": "Lucas"},
        "location": {
            "street": {"number": 9173, "name": "Rue Louis-Garrand"},
            "city": "Langenbruck",
            "state": "Schwyz",
            "country": "Switzerland",
            "postcode": 8619,
            "coordinates": {"latitude": "-11.4807", "longitude": "-72.4477"},
            "timezone": {"offset": "-10:00", "description": "Hawaii"}
        },
        "email": "carla.lucas@example.com",
        "login": {
            "uuid": "cbf30061-6f1f-4f01-98dd-fcff1fde31e0",
            "username": "purplegoose555",
            "password": "henry",
            "salt": "nfpy1Oi6",
            "md5": "ef5512189c6ee07eedc135cf9d6ffefd",
            "sha1": "6793a899d5229a7a8c60fa5129f0f0405a7fc106",
            "sha256": "f4363bd8f2923ae05a70221bbfaa62a3ada7cdf98e50a1050c1528291a1f7234"
        },
        "dob": {"date": "1994-05-19T19:57:51.161Z", "age": 28},
        "registered": {"date": "2016-08-07T15:53:56.817Z", "age": 6},
        "phone": "075 671 95 98",
        "cell": "077 006 98 88",
        "id": {"name": "AVS", "value": "756.4942.2193.89"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/17.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
        },
        "nat": "CH"
    }, {
        "gender": "female",
        "name": {"title": "Ms", "first": "Gwendolyn", "last": "Van den Eijkel"},
        "location": {
            "street": {"number": 2022, "name": "Heivlinderweg"},
            "city": "Smakt",
            "state": "Noord-Holland",
            "country": "Netherlands",
            "postcode": 94328,
            "coordinates": {"latitude": "-72.9594", "longitude": "-45.5243"},
            "timezone": {"offset": "-12:00", "description": "Eniwetok, Kwajalein"}
        },
        "email": "gwendolyn.vandeneijkel@example.com",
        "login": {
            "uuid": "e13b29f1-ee79-4631-86da-2e6a58ed2ed2",
            "username": "organicbutterfly351",
            "password": "*****",
            "salt": "EfIo2xzG",
            "md5": "0b090b01ce65d40a641a780707612d7d",
            "sha1": "829dc570d4bb5542448e567220fb54bc771abc4f",
            "sha256": "b2bafe80dc87ff3a23b9c8a063d1359b9584b36b49fd881daca45d3fb54a6e22"
        },
        "dob": {"date": "1994-10-10T18:34:30.671Z", "age": 28},
        "registered": {"date": "2013-06-01T03:06:10.791Z", "age": 9},
        "phone": "(297)-690-1170",
        "cell": "(871)-226-6804",
        "id": {"name": "BSN", "value": "95489765"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/82.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
        },
        "nat": "NL"
    }]
}

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}

describe("FollowersList", () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse)
        })
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render first follower element', async () => {
        render(<MockFollowersList/>);
        const followerElement = await screen.findByTestId("follower-item-0");
        expect(followerElement).toBeInTheDocument();
    });

    it('should render multiple followers', async () => {
        render(<MockFollowersList />);
        const followerElement = await screen.findAllByTestId(/follower-item/i);
        screen.debug();
        expect(followerElement.length).toBe(5);
    });
})
