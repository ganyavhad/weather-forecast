import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap, Mapper } from "@automapper/core";
import { Injectable } from "@nestjs/common";

import { LocationDto } from "../location/dto/location.dto";
import { Location } from "../location/entities/location.entity";

@Injectable()
export class LocationProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, Location, LocationDto);
            createMap(mapper, LocationDto, Location);
        };
    }
}