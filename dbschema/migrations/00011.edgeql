CREATE MIGRATION m1i4leoz5n2i4ujkkgnnxegqzftlqkzsmfoafdkc2rfznjtppy5s7a
    ONTO m1vcatjjxsopkvfnyghvsska2nntk32c72w42c52wx5dfuz7fygo3a
{
  ALTER TYPE default::Event {
      ALTER PROPERTY title {
          SET REQUIRED USING (<std::str>{});
      };
  };
  ALTER TYPE default::User {
      DROP PROPERTY passwordHash;
  };
};
