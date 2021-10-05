import {
  Box,
  chakra,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageLayout from '../layout/Page';

function Projects() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <chakra.main>
        <Box mx="auto" maxW="6xl" py={3} px={4}>
          <Text fontSize="xl">{t('projects')}</Text>
          <Text my={2} color="gray.600">
            {t('projectsList')}
          </Text>
          <UnorderedList spacing="1">
            <ListItem>
              <Link
                href="https://ddao.ibby.dev/"
                textDecoration="underline"
                isExternal
                mr={1}
              >
                {t('ddaoTokenSearch')}
              </Link>
              - {t('by')}
              <Link
                href="https://github.com/Ibby-devv"
                textDecoration="underline"
                isExternal
                ml={1}
              >
                Brian Eter
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://developerdao.vercel.app/"
                textDecoration="underline"
                isExternal
                mr={1}
              >
                {t('title')}
              </Link>
              - {t('by')}
              <Link
                href="https://github.com/fmoliveira"
                textDecoration="underline"
                isExternal
                ml={1}
              >
                fmoliveira
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </chakra.main>
    </PageLayout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Projects;
