import React, { useCallback } from 'react';
import { AddIcon } from '@sanity/icons';
import { Button, Stack } from '@sanity/ui';
import { randomKey } from '@sanity/util/content';
import {
  ArrayOfObjectsInputProps,
  insert,
  set,
  useClient,
} from 'sanity';

export function CustomFeaturedProjectsInput(props: ArrayOfObjectsInputProps) {
  const { onChange } = props;
  const client = useClient();

  const handleAddProjects = useCallback(async () => {
    const query = `*[_type == "project"]._id`;
    const projectIds: string[] = (await client.fetch(query)) ?? [];
    const projectReferences = projectIds.map((projectId) => ({
      _key: randomKey(12),
      _type: 'reference',
      _ref: projectId,
    }));

    // Reset the array to an empty array
    onChange(set([]));

    // Then insert the new project references
    projectReferences.forEach((projectReference) => {
      onChange(insert([projectReference], 'after', [-1]));
    });
  }, [onChange, client]);

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Button icon={AddIcon} text="Update Projects" onClick={handleAddProjects} />
    </Stack>
  );
}
