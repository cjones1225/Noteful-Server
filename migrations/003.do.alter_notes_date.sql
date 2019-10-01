alter table noteful_notes
    Add Column
        date_modified timestamp default now() not null;