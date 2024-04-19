CREATE MIGRATION m1nm3dlrojdnf5a2qt7sb4x4ykuxewhv5yhg3titqn7yapjogvmeya
    ONTO m1lebqspifgzmmkq6qq5r3bbid6p5i3ogkbgrwyultzilvnbvhecxa
{
  ALTER TYPE default::Company {
      ALTER PROPERTY companyEmail {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
