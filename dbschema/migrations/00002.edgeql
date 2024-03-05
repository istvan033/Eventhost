CREATE MIGRATION m12cpoyumav7enegbws63wowrqpow4b6vd4thi6aw3x7jd7whikkna
    ONTO m16wlzxooxffpaayva2ukvlfbqtgdigaksebfb3gnoadtpij3fdkra
{
  ALTER TYPE default::User {
      CREATE PROPERTY address: std::str {
          SET REQUIRED USING (<std::str>{});
      };
      CREATE PROPERTY addressDetail: std::str {
          SET REQUIRED USING (<std::str>{});
      };
      CREATE PROPERTY city: std::str {
          SET REQUIRED USING (<std::str>{});
      };
      CREATE PROPERTY country: std::str {
          SET REQUIRED USING (<std::str>{});
      };
      CREATE PROPERTY zipCode: std::str {
          SET REQUIRED USING (<std::str>{});
      };
      EXTENDING default::HasAddress BEFORE default::HasTimestamps;
  };
  ALTER TYPE default::User {
      ALTER PROPERTY address {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
      ALTER PROPERTY addressDetail {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
      ALTER PROPERTY city {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
      ALTER PROPERTY country {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
      ALTER PROPERTY zipCode {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
};
