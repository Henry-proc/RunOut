SET search_path TO public;

CREATE TYPE climb_type AS ENUM ('sport', 'trad', 'boulder', 'top_rope');

CREATE TYPE boulder_grade AS ENUM (
    'VB', 'V0', 'V1', 'V2', 'V3', 'V4', 'V5',
    'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12',
    'V13', 'V14', 'V15', 'V16', 'V17'
);

CREATE TYPE rope_grade AS ENUM (
    '1', '2', '3',
    '4a', '4b', '4c',
    '5a', '5b', '5c',
    '6a', '6a+', '6b', '6b+', '6c', '6c+',
    '7a', '7a+', '7b', '7b+', '7c', '7c+',
    '8a', '8a+', '8b', '8b+', '8c', '8c+',
    '9a', '9a+', '9b', '9b+', '9c'
);

CREATE TYPE adjectival_grade AS ENUM (
    'M', 'D', 'VD', 'HVD', 'S', 'HS', 'VS', 'HVS',
    'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11'
);

CREATE TYPE tech_grade AS ENUM (
    '1a', '1b', '1c',
    '2a', '2b', '2c',
    '3a', '3b', '3c',
    '4a', '4b', '4c',
    '5a', '5b', '5c',
    '6a', '6b', '6c',
    '7a', '7b', '7c'
);

CREATE TABLE IF NOT EXISTS climbs (
    climb_id            INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    climb_name          VARCHAR(32) NOT NULL,
    climb_type          climb_type NOT NULL,
    boulder_grade       boulder_grade,
    rope_grade          rope_grade,
    adjectival_grade    adjectival_grade,
    tech_grade          tech_grade,
    climb_desc          VARCHAR(255),
    climb_created_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    climb_active        BOOLEAN NOT NULL DEFAULT TRUE,
    CHECK (
        (climb_type = 'boulder'
            AND boulder_grade IS NOT NULL
            AND rope_grade IS NULL AND adjectival_grade IS NULL AND tech_grade IS NULL)
        OR
        (climb_type IN ('sport', 'top_rope')
            AND rope_grade IS NOT NULL
            AND boulder_grade IS NULL AND adjectival_grade IS NULL AND tech_grade IS NULL)
        OR
        (climb_type = 'trad'
            AND adjectival_grade IS NOT NULL AND tech_grade IS NOT NULL
            AND boulder_grade IS NULL AND rope_grade IS NULL)
    )
);