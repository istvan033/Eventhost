module default {
  abstract type HasAddress {
    required country: str;
    required zipCode: str;
    required city: str;
    required address: str;
    required addressDetail: str;
  };

  abstract type HasTimestamps {
    required createdAt: datetime {
      readonly := true;
      default := datetime_of_statement();
    };
    required updatedAt: datetime {
      default := datetime_of_statement();
      rewrite update using (datetime_of_statement());
    };
  };

  type User extending HasAddress, HasTimestamps {
    required firstName: str;
    required lastName: str;
    required email: str{
      constraint exclusive;
    };
    required phone: str;
    organizerCode: str;
  }

  type Event extending HasAddress, HasTimestamps {
    required title: str;
    required placeName: str;
    required emailValidation: str;
    description: str;
    startsAt: datetime;
    endsAt: datetime;
    constraint expression on (.startsAt < .endsAt);
    startsAtHour: str{
      constraint regexp(r'^(0?[0-9]|1[0-9]|2[0-4]):[0-5][0-9]$');
    };
    required link organizer: Organizer;
    multi link tickets := .<event[is Ticket];
  }

  type Organizer extending HasAddress, HasTimestamps {
    required firstName: str;
    required lastName: str;
    required email: str{
      constraint exclusive;
    };
    required phone: str;
    required organizerCode: str;
    link event := .<organizer[is Event];
  }

  type Company extending HasAddress, HasTimestamps {
    required name: str;
    required companyEmail: str{
      constraint exclusive;
    };
    required euTaxNumber: str;
    required organizerCode: str;
    website: str;
    description: str;
    facebook: str;
    instagram: str;
    linkedin: str;
    threads: str;
    tiktok: str;
  }

  type companyNews extending HasTimestamps {
    title: str;
    description: str;
    
  }




  type Ticket extending HasTimestamps {
    required token: str {
      constraint exclusive;
    };
    required fullName: str;
    required firstName: str;
    required lastName: str;
    required email: str;
    required phone: str;
    required inviteCode: str;
    organizationName: str;
    required link event: Event;
  }
}
