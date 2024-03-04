CREATE MIGRATION m1vcatjjxsopkvfnyghvsska2nntk32c72w42c52wx5dfuz7fygo3a
    ONTO m1oenpj2u5ugvcrwfg4ow3frkx7s5dq2pufnbp7iq6gruoktfkvwsq
{
  ALTER TYPE default::HasAddress {
      ALTER PROPERTY country {
          DROP CONSTRAINT std::max_len_value(2);
          DROP CONSTRAINT std::min_len_value(2);
      };
  };
  DROP TYPE default::LinkOpen;
  ALTER TYPE default::Scan {
      DROP LINK users;
  };
  ALTER TYPE default::Ticket {
      DROP PROPERTY checkedIn;
      DROP LINK scans;
  };
  DROP TYPE default::Scan;
};
