CREATE MIGRATION m1vgb7jtmmkijwk6l32x7ijudo3wfydufifz5u56ujureqyk5krvjq
    ONTO m1i4leoz5n2i4ujkkgnnxegqzftlqkzsmfoafdkc2rfznjtppy5s7a
{
  ALTER TYPE default::Ticket {
      DROP PROPERTY badgeReceivedAt;
      DROP PROPERTY badgeToken;
      DROP PROPERTY gdprAccepted;
      DROP PROPERTY newsletterSubscribed;
      DROP PROPERTY note;
  };
};
