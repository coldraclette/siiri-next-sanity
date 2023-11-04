export const structure = (S: any) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages Content")
            .items([
              S.listItem()
                .title("Information Page")
                .child(
                  S.document()
                    .schemaType("informationPage")
                    .documentId("informationPage")
                    .title("Information Page")
                ),
            ])
        ),

      ...S.documentTypeListItems().filter(
        (listItem: any) => !["informationPage"].includes(listItem.getId())
      ),
    ]);
