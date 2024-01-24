CREATE MIGRATION m1zrfuavw3t33djp5dsc3yr3bny6jdelcm7bhkjxblksk2boscd6qa
    ONTO m1osbs3st2ow5yrbefb75j4jy7powlchsearworxbkrw7km4igeryq
{
  ALTER TYPE default::Ticket {
      DROP LINK events;
      ALTER PROPERTY inviteCode {
          RESET OPTIONALITY;
      };
  };
};
