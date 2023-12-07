module default {
  abstract type HasAddress {
    required country: str {
      constraint min_len_value(2);
      constraint max_len_value(2);
    };
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


  type User extending HasTimestamps {
    required firstName: str;
    required lastName: str;

    required email: str;
    required phone: str;

    required passwordHash: str;

    #avatar_filename: str;
  }

  type Event extending HasAddress, HasTimestamps {
    title: str;
    required link organizer: Organizer;
    description: str;

    # Images
    #cover_filename: str;
    #ticket_image_filename: str;

    startsAt: datetime;
    endsAt: datetime;
    constraint expression on (.startsAt < .endsAt);

    # Location
    required placeName: str;

    multi link tickets: Ticket {
      constraint exclusive;
    };
  }

  type Ticket extending HasTimestamps {
    required token: str;

    badgeToken: str;
    badgeReceivedAt: datetime;

    multi link scans: Scan;
    property checkedIn := exists(.scans);

    required firstName: str;
    required lastName: str;

    required email: str;
    required phone: str;

    required inviteCode: str;
    note: str;

    organizationName: str;

    required gdprAccepted: bool;
    required newsletterSubscribed: bool;

    #avatar_filename: str;
  }

  type Scan extending HasTimestamps {
    required link user: User;
  }

  type LinkOpen extending HasTimestamps {
    required link ticket: Ticket;
  }

  type Organizer extending HasAddress, HasTimestamps {
    required name: str;
    required taxNumber: str;
    required euTaxNumber: str;
    required phone: str;
    required website: str;
    required email: str;

    # Socials
    facebook: str;
    facebookGroup: str;
    instagram: str;
    linkedin: str;
    threads: str;
    tiktok: str;

    #logo_filename: str;

    multi link users: User;

    link events := .<organizer[is Event];
  }
}
